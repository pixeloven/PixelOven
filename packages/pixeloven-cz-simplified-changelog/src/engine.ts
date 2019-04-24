/* tslint:disable no-any */
import chalk from "chalk";
import map from "lodash.map";
import longest from "longest";
import rightPad from "right-pad";
import wrap from "word-wrap";
import { Answers, CommitFunction, Options } from "./types";

/**
 * @todo Break out common code for other version of changelog
 * @todo Add hook logic into CLI for easy integration
 * @todo Update examples to include this stuff???
 *          - Or make a new one
 */

interface SimplifiedAnswers extends Answers {
    isBreaking: boolean;
    isIssueAffected: boolean;
    issues: string;
    breaking: string;
}

const filter = (array: string[]) => {
    return array.filter(str => {
        return str && str.length;
    });
};

const headerLength = (answers: SimplifiedAnswers) => {
    return (
        answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0)
    );
};

const maxSummaryLength = (options: Options, answers: SimplifiedAnswers) => {
    return options.maxHeaderWidth - headerLength(answers);
};

const filterSubject = (subject: string) => {
    subject = subject.trim();
    if (subject.charAt(0).toLowerCase() !== subject.charAt(0)) {
        subject =
            subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
    }
    while (subject.endsWith(".")) {
        subject = subject.slice(0, subject.length - 1);
    }
    return subject;
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
export default (options: Options) => {
    const types = options.types;
    const length: number = longest(Object.keys(types)).length + 1;
    const choices = map(types, (type, key) => {
        return {
            name: rightPad(key + ":", length) + " " + type.description,
            value: key,
        };
    });

    return {
        // When a user runs `git cz`, prompter will
        // be executed. We pass you cz, which currently
        // is just an instance of inquirer.js. Using
        // this you can ask questions and get answers.
        //
        // The commit callback should be executed when
        // you're ready to send back a commit template
        // to git.
        //
        // By default, we'll de-indent your commit
        // template and will keep empty lines.
        prompter: (cz: any, commit: CommitFunction) => {
            // Let's ask some questions of the user
            // so that we can populate our commit
            // template.
            //
            // See inquirer.js docs for specifics.
            // You can also opt to use another input
            // collection library if you prefer.
            cz.prompt([
                {
                    choices,
                    default: options.defaultType,
                    message:
                        "Select the type of change that you're committing:",
                    name: "type",
                    type: "list",
                },
                {
                    default: options.defaultScope,
                    filter: (value: string) => {
                        return value.trim().toLowerCase();
                    },
                    message:
                        "What is the scope of this change (e.g. component or file name): (press enter to skip)",
                    name: "scope",
                    type: "input",
                },
                {
                    default: options.defaultSubject,
                    filter: (subject: string) => {
                        return filterSubject(subject);
                    },
                    message: (answers: SimplifiedAnswers) => {
                        return (
                            "Write a short, imperative tense description of the change (max " +
                            maxSummaryLength(options, answers) +
                            " chars):\n"
                        );
                    },
                    name: "subject",
                    transformer: (
                        subject: string,
                        answers: SimplifiedAnswers,
                    ) => {
                        const filteredSubject = filterSubject(subject);
                        const color =
                            filteredSubject.length <=
                            maxSummaryLength(options, answers)
                                ? chalk.green
                                : chalk.red;
                        return color(
                            "(" + filteredSubject.length + ") " + subject,
                        );
                    },
                    type: "input",
                    validate: (subject: string, answers: SimplifiedAnswers) => {
                        const filteredSubject = filterSubject(subject);
                        return filteredSubject.length === 0
                            ? "subject is required"
                            : filteredSubject.length <=
                              maxSummaryLength(options, answers)
                            ? true
                            : "Subject length must be less than or equal to " +
                              maxSummaryLength(options, answers) +
                              " characters. Current length is " +
                              filteredSubject.length +
                              " characters.";
                    },
                },
                {
                    default: options.defaultBody,
                    message:
                        "Provide a longer description of the change: (press enter to skip)\n",
                    name: "body",
                    type: "input",
                },
                {
                    default: false,
                    message: "Are there any breaking changes?",
                    name: "isBreaking",
                    type: "confirm",
                },
                {
                    message: "Describe the breaking changes:\n",
                    name: "breaking",
                    type: "input",
                    when: (answers: SimplifiedAnswers) => {
                        return answers.isBreaking;
                    },
                },
                {
                    default: options.defaultIssues ? true : false,
                    message: "Does this change affect any open issues?",
                    name: "isIssueAffected",
                    type: "confirm",
                },
                {
                    default: options.defaultIssues
                        ? options.defaultIssues
                        : undefined,
                    message: `Add issue references (e.g. "#123" or "PO-1000"):\n`,
                    name: "issues",
                    type: "input",
                    when: (answers: SimplifiedAnswers) => {
                        return answers.isIssueAffected;
                    },
                },
            ]).then((answers: SimplifiedAnswers) => {
                const wrapOptions = {
                    cut: false,
                    indent: "",
                    newline: "\n",
                    trim: true,
                    width: options.maxLineWidth,
                };

                // Apply breaking change prefix, removing it if already present
                let breaking = answers.breaking ? answers.breaking.trim() : "";
                breaking = breaking
                    ? "BREAKING CHANGE: " +
                      breaking.replace(/^BREAKING CHANGE: /, "")
                    : "";
                breaking = breaking ? wrap(breaking, wrapOptions) : "";

                const issues = answers.issues
                    ? wrap(answers.issues, wrapOptions)
                    : "";
                // parentheses are only needed when a scope is present
                const scope = answers.scope ? "(" + answers.scope + ")" : "";

                // Hard limit this line in the validate
                const head = answers.type + scope + ": " + answers.subject;

                // Wrap these lines at options.maxLineWidth characters
                const body = answers.body
                    ? wrap(answers.body, wrapOptions)
                    : "";

                const footer = filter([breaking, issues]).join("\n\n");

                commit(filter([head, body, footer]).join("\n\n"));
            });
        },
    };
};
