import { createSeedClient } from "@snaplet/seed";
import { sessionStatuses } from "../../constants.mjs";

function getRandomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const userIds = [
  "user_2fY8qBwxbE9Ia0UiZRvkuG4DD0E", // andrewlamyw
  "user_2gOwGehE3l14ew9Ynv9lS8jcD6A", // chocobocanfly
];

const seed = await createSeedClient();

await seed.$resetDatabase();

const { sessionStatus } = await seed.sessionStatus(sessionStatuses);

await seed.session(
  (x) => x(20, () => ({ creatorId: getRandomValueFromArray(userIds) })),
  { connect: { sessionStatus } }
);

process.exit();
