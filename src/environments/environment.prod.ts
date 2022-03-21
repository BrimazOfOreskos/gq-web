export const environment = {
  production: true,
  map: {
    center: [ 48.3794, 31.1656 ],
    zoom: {
      default: 3,
      max: 18,
      min: 6
    }
  },
  services: {
    osm: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  }
};
