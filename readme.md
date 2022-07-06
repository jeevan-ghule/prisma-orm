For prisma setup
1. Install dependency 
    npm install

2. Check prisma CLI is working 
    npx prisma
    or install new package
    prisma CLI : (Dev dependency)
    npm i  prisma -D  

3. Initialize prisma project
   npx prisma init
   
   It will create the prisma folder in root level  containing schema.prisma file 
   We will create the db model in schema.prisma file to interact with db
   Also create the .env file for application entrainment 
   DATABASE_URL 

4. Go to VS code extension and add prisma extension for .prisma file

5. Write your db table schema into prisma/schema.prisma file

6. To migrate db 

   npx prisma migrate dev --name init

   It will create migrations folder with sql .files

7. To view database 
   npx prisma studio