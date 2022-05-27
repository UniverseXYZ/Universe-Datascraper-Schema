/**
 * Modify exiting sentForMediaAt_1 index to include needToRefreshMediaFiles
 * as it's second property
 */
module.exports = {
  //
  // Add needToRefreshMediaFiles to index, requires drop/recreate
  //
  async up(db, client) {
    const collection = db.getCollection("nft-tokens");
    // Drop existing index if present, otherwise noop
    await collection.dropIndex("sentForMediaAt_1");
    // Create new index w/ additional property. Note that any queries
    // that leveraged the old index can leverage this one equally since
    // both have same field/order as first member
    await collection.createIndex(
      {
        sentForMediaAt: 1,
        needToRefreshMediaFiles: 1
      },
      {
        name: 'sentForMediaAt_1_needToRefreshMediaFiles_1'
      }
    );
  },
  //
  // Remove needToRefreshMediaFiles from index, requires drop/recreate.
  // Note that this is not strictly necessary since the "new" index works
  // as well as the original, however I'm including just for good house
  // keeping
  //
  async down(db, client) {
    const collection = db.getCollection("nft-tokens");
    // Drop new index if present, otherwise noop
    await collection.dropIndex("sentForMediaAt_1_needToRefreshMediaFiles_1");
    // Create new index w/ additional property. Note that any queries
    // that leveraged the old index can leverage this one equally since
    // both have same field/order as first member
    await collection.createIndex(
      {
        sentForMediaAt: 1
      },
      {
        name: 'sentForMediaAt_1'
      }
    );
  }
};
