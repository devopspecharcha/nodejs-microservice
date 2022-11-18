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

        stage("Docker build and push") {
            steps {
                // sh 'npm install'
                  sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 043794227360.dkr.ecr.ap-south-1.amazonaws.com"
                  sh "docker build -t 043794227360.dkr.ecr.ap-south-1.amazonaws.com/nodejs-microservice:1.0.$BUILD_NUMBER ."
                  sh "docker push 043794227360.dkr.ecr.ap-south-1.amazonaws.com/nodejs-microservice:1.0.$BUILD_NUMBER"
                  sh "echo 'build completed success fully'"  
            }
        } 
    }

}
