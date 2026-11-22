function addID(campaignRecord) {
  let id = `${campaignRecord.campaignName}-${campaignRecord.senderName}`;

  const newCampaignRecord = {
    ...campaignRecord,
    id,
  };
  return newCampaignRecord;
}

// don't touch below this line

export { addID };
