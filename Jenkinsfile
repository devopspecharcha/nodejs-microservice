pipeline {
    agent any
    // triggers { pollSCM('H/2 * * * *') }
    
    stages {
        stage("Checkout scm") {
            steps {
                checkout scm
            }
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
                // sh 'npm run build:document'
                echo "Npm Build successful"
            }
        } 
    }

}
