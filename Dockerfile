FROM maven:3.8.6-openjdk-8-slim as builder
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN mvn clean package

FROM openjdk:8-alpine
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/target/example-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java", "-jar", "example-0.0.1-SNAPSHOT.jar"]