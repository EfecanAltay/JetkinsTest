pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Show Version'){
            steps{
                sh 'node --version'
            }
        }
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
        
        stage('Test'){
            steps{
                sh 'npm install'
            }
        }
        
        stage('Deploy'){
            steps{
                echo 'deploy'
            }
        }
    }
}
