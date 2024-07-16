# docker examples

## volta1

### docker compose
```
docker compose up -d

docker compose attach volta1_svc
pnpm -v

Ctrl-P Ctrl-Q

docker compose down

# all clean
docker compose down --rmi all --volumes
```

### next.js app
```
pnpx create-next-app@latest

pnpm run dev

```
