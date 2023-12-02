export function updateObjectInArray<ObjectShape>(
  initialArray: ObjectShape[],
  key: keyof ObjectShape,
  value: ObjectShape[keyof ObjectShape],
  patch: Partial<ObjectShape>
) {
  const result = initialArray.map((elem) => ({ ...elem }));

  const index = result.findIndex((elem) => elem[key] === value);

  if (index !== -1) {
    result[index] = { ...result[index], ...patch };
  }

  return result;
}
