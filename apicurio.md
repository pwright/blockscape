# Using Apicurio as backend

Backend

```
podman run --replace --name registry   -p 8080:8080   -e QUARKUS_HTTP_CORS=true   -e QUARKUS_HTTP_CORS_ORIGINS="*"   -e QUARKUS_HTTP_CORS_ACCESS_CONTROL_ALLOW_METHODS="GET,PUT,POST,DELETE,OPTIONS,HEAD"   -e QUARKUS_HTTP_CORS_ACCESS_CONTROL_ALLOW_HEADERS="accept,authorization,content-type,x-requested-with"   apicurio/apicurio-registry:latest-release
```

UI

```
podman run -it --rm   -p 8081:8080   -e REGISTRY_API_URL=http://localhost:8080/apis/registry/v3   docker.io/apicurio/apicurio-registry-ui:latest-release

```

