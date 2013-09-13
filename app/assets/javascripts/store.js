// http://emberjs.com/guides/models/defining-a-store/

HairyOctoWallhack.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
