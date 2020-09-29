## Getting Started with NextJs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

https://nextjs.org/docs/getting-started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Docker Images:

docker pull store/saplabs/hanaexpress:2.00.040.00.20190729.1

https://hub.docker.com/_/sap-hana-express-edition/plans/f2dc436a-d851-4c22-a2ba-9de07db7a9ac?tab=instructions

https://www.linkedin.com/pulse/sap-hana-express-edition-docker-end-example-vadim-zaripov

## Operation:
- access to docker hanaDB container (by docker)
    docker exec -it <container_id> bash
    docker exec -it 6ec95abd9a54 bash
- check info & version
    whoami
    HDB info
    ip addr    
    hdbsql -n localhost:30015 -u SYSTEM -p HXEHana1
    hdbsql -n localhost:30017 -u SYSTEM -p HXEHana1
    hdbsql -n localhost:39041 -u SYSTEM -p HXEHana1
- create database:

