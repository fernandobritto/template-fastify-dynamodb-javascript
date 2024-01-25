#!/bin/bash
set -e

export APP_NAME=template-fastify-dynamodb-javascript

if [ -z "$ENV" ];
  then ENV=production;
fi

case "$1" in
  test)
    export DEBUG=customer:*
    export NODE_ENV=test
    npx jest --coverage --forceExit
  ;;
  sonar)
    PACKAGE_VERSION=$(cat package.json \
      | grep version \
      | head -1 \
      | awk -F: '{ print $2 }' \
      | sed 's/[",]//g' \
      | tr -d '[[:space:]]')
    echo "Extracted version: ${PACKAGE_VERSION}"

    REPLACE='^sonar.projectVersion=.*$'
    WITH="sonar.projectVersion=${PACKAGE_VERSION}"
    sed -i.bak "s#${REPLACE}#${WITH}#g" sonar-project.properties

    git add sonar-project.properties
    git commit -am "add: bump sonar"
  ;;
  build)
    echo 'Building...'

    rm -rf node_modules dist
    mkdir -p dist/
    git checkout package-lock.json

    npm ci --only=production
    npm prune --production

    cp package.json dist/
    cp newrelic.js dist/
    cp -R src dist/src
    cp -R node_modules dist/node_modules
  ;;
  *)
    echo "Usage: {test|sonar|build}"
    exit 1
  ;;
esac
