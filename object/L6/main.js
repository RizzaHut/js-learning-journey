function getRegion(campaign) {
  return campaign.location?.region ?? undefined;
}

// don't touch below this line

export { getRegion };
