## Fastify & Prisma API Template (npx installable)

This template provides a basic foundation for starting a new Node.js API project using Fastify and Prisma.

**Features:**

- **Fastify:** A lightweight and performant Node.js web framework.
- **Prisma:** A powerful tool for connecting to databases and defining data models.



**Create a New Project:**

   ```bash
   npx fastify-prisma-template create projectName
   ```

   Replace `projectName` with your desired project name. This will create a new directory with the template structure and install dependencies.

**Project Structure:**

```
projectName/
  prisma/
    schema.prisma
  src/
    index.ts
  .env
  .eslintrc.json
  .gitignore
  docker-compose.yml
  package.json
  tsconfig.json
```