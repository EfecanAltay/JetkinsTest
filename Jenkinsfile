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
    }
}
