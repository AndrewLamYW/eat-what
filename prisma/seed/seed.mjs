import { createSeedClient } from "@snaplet/seed";
import { sessionStatuses } from "../../constants.mjs";

const seed = await createSeedClient();

await seed.$resetDatabase();
const { sessionStatus } = await seed.sessionStatus(sessionStatuses);
await seed.session((x) => x(20), { connect: { sessionStatus } });

process.exit();
