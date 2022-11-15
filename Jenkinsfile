pipeline {
    agent any

    stages {
        stage("Checkout scm") {
            checkout scm
        } 

        stage("List out folders") {
            steps {
                sh 'ls -al'
            }
        } 

        stage("npm install") {
            steps {
                sh 'npm install'
            }
        } 

        stage("npm build") {
            steps {
                sh 'npm run build:document'
            }
        } 
    }

}
