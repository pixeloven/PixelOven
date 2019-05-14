FROM node:10
LABEL description="React SSR Example"

WORKDIR /tmp/src/app/
ADD . /tmp/src/app/

# Install deps and build application
RUN apt-get update && \
    npm install -g npm && \
    npm install -g yarn && \
    npm install -g lerna && \
    # npm install -g pm2 && \
    yarn install

# Setup ENV for run time
ENV BABEL_ENV "production"
ENV HOST "0.0.0.0"
ENV PORT "8080"
ENV PROTOCOL "http"
ENV PUBLIC_PATH "/example/"
ENV NODE_ENV "production"
ENV ENVIRONMENT "production"

# Build application
RUN lerna boostrap

VOLUME /usr/src/app/node_modules

# Copy example files into container and move node_modules into app and then build application
# @todo Currently node_modules includes devDeps we should avoid this in production
    # Consider bundling server.js so node_modules are not needed
RUN cp -a /tmp/src/app/dist /usr/src/app/ && \
    cp -a /tmp/src/app/node_modules /usr/src/app/ && \
    cp -a /tmp/src/app/package.json /usr/src/app/

EXPOSE 8080
EXPOSE 9001

