## Started with NextJs (FE + BE)
This is a project bootstrapped with [`create-next-app`] from NextJs

https://github.com/vercel/next.js/tree/canary/packages/create-next-app
https://nextjs.org/docs/getting-started

First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Docker Images (for HanaDB)

docker pull store/saplabs/hanaexpress:2.00.040.00.20190729.1 (local machine must have RAM >= 16G at least)

https://hub.docker.com/_/sap-hana-express-edition/plans/f2dc436a-d851-4c22-a2ba-9de07db7a9ac?tab=instructions

https://www.linkedin.com/pulse/sap-hana-express-edition-docker-end-example-vadim-zaripov

## Operation running by docker
# access to docker hanaDB container (by docker)
    docker exec -it <container_id> bash
    docker exec -it 6ec95abd9a54 bash
# check info & version
    whoami
    HDB info
    ip addr    
    hdbsql -n localhost:30015 -u SYSTEM -p HXEHana1
    hdbsql -n localhost:30017 -u SYSTEM -p HXEHana1
    hdbsql -n localhost:39041 -u SYSTEM -p HXEHana1
    
