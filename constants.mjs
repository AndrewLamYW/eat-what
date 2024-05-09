export const sessionStatus = {
  1: { name: "Active" },
  2: { name: "Inactive" },
};

export const sessionStatuses = Object.entries(sessionStatus).map(
  ([key, value]) => ({
    id: Number(key),
    ...value,
  })
);
