FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/
COPY ${JAR_FILE} emotions.jar
RUN ["javac "]
ENTRYPOINT ["java","-jar","/emotions.jar"]
