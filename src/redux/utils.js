const buildActionType = (moduleName, actionName) =>
  `${moduleName} ${actionName}`;

const buildAsyncActionType = (moduleName, actionName) => {
  const baseActionName = buildActionType(moduleName, actionName);
  return {
    REQUESTED: `${baseActionName}_REQUESTED`,
    SUCCESS: `${baseActionName}_SUCCESS`,
    FAILED: `${baseActionName}_FAILED`
  };
};

export { buildAsyncActionType };
