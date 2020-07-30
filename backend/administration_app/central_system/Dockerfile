FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} emotions.jar
ENTRYPOINT ["java","-jar","/emotions.jar"]
