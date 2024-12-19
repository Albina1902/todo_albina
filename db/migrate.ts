
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./drizzle";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./db/migrations",
    });
    console.log("Migration Completed");
  } catch (error) {
    console.log("error during migration: ", error);
    process.exit(1);
  }
};

main();

// done