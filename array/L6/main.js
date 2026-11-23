function getLogViews(logs) {
  const logViews = {
    preview: logs.slice(0,3),
    remaining: logs.slice(3),
    recent: logs.slice(-2)
  }

  return logViews
}

export { getLogViews };
