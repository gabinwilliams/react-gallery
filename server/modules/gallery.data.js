const galleryItems = [
  {
    id: 3,
    path: "images/firey_sunset.jpg",
    description: `A beautiful sunset taken from my porch at my house in Colorado.`,
    likes: 2,
  },
  {
    id: 4,
    path: "images/max.jpg",
    description: "My first dog, Max.",
    likes: 0,
  },

  {
    id: 6,
    path: "images/park_near_louvre.jpg",
    description: "A park just outside of the Musee Louvre, Paris, France.",
    likes: 1,
  },
  {
    id: 7,
    path: "images/versailles_ceiling.jpg",
    description: "One of the many ornate ceilings of Versailles.",
    likes: 0,
  },
  {
    id: 8,
    path: "images/thomas_jefferson.jpg",
    description:
      "Statue of Thomas Jefferson outside of the Musee Monmart, Paris, France.",
    likes: 0,
  },
  {
    id: 9,
    path: "images/rodin_three_men.jpg",
    description: "Rodin sculpture, Musee Rodin, Paris, France.",
    likes: 0,
  },
  {
    id: 10,
    path: "images/rodin_woman.jpg",
    description: "Rodin sculpture, Musee Rodin, Paris, France.",
    likes: 0,
  },
  {
    id: 11,
    path: "images/royal_cottages_versailles.jpg",
    description: `"Cottages" built for the Queen of France and her three closest friends. Versailles, France.`,
    likes: 2,
  },
  {
    id: 12,
    path: "images/gazebo.jpg",
    description: "Marble gazebo in the gardens of Versailles, France.",
    likes: 3,
  },
  {
    id: 13,
    path: "images/acting_stupid.jpg",
    description: "Chad being a dork.",
    likes: 0,
  },
  {
    id: 14,
    path: "images/actual_restaurant.jpg",
    description: "Another weird restaurant in Pristina.",
    likes: 0,
  },
  {
    id: 15,
    path: "images/album_cover.jpg",
    description: "Slightly modified painting from El Paso Museum of Art.",
    likes: 0,
  },

  {
    id: 17,
    path: "images/bad_neighbor.jpg",
    description: "Moose that liked to hang out in my front yard in Colorado.",
    likes: 0,
  },
  {
    id: 18,
    path: "images/bald_barista.jpg",
    description:
      "Owner of The Bald Barista Coffee Shop in Dublin. Yes, he has a tattoo of the shop logo on the back of his head.",
    likes: 0,
  },
  {
    id: 19,
    path: "images/best_steak.jpg",
    description:
      "Three steaks stacked on a potato pancake-ish dish. Cost about $40 US in Skopje, Macedonia.",
    likes: 0,
  },
  {
    id: 20,
    path: "images/birdseed_thief.jpg",
    description: "Ground squirrel that liked to steal all of my birdseed.",
    likes: 0,
  },
  {
    id: 21,
    path: "images/black_madonna.jpg",
    description:
      '15th Century religious statue, referred to a "Black Madonna."',
    likes: 0,
  },
  {
    id: 22,
    path: "images/black_madonna_2.jpg",
    description:
      '15th Century religious statue, referred to a "Black Madonna."',
    likes: 0,
  },
  {
    id: 23,
    path: "images/bw_park_kuwait.jpg",
    description: "Chad in a park in Kuwait City.",
    likes: 0,
  },
  {
    id: 24,
    path: "images/cat_mouse_cathedral.jpg",
    description:
      "Mummified cat and mouse carcass found in an organ pipe in Cathedral of Dublin, Ireland.",
    likes: 0,
  },
  {
    id: 25,
    path: "images/chad_eiffel_tower.jpg",
    description: "Chad in front of the Eiffel Tower in Paris, France.",
    likes: 0,
  },
  {
    id: 26,
    path: "images/chairy_orchard.jpg",
    description: 'A "Chairy" orchard in Denton, Texas.',
    likes: 0,
  },
  {
    id: 27,
    path: "images/colorado_road.jpg",
    description:
      "Stretch of mountain road frequented by mouse and elk in Colorado.",
    likes: 0,
  },
  {
    id: 28,
    path: "images/dpd_graduation.jpg",
    description: "Graduation Day from Dallas Police Academy.",
    likes: 0,
  },
  {
    id: 29,
    path: "images/dubai_cabbie.jpg",
    description:
      "Very cool cab driver, who posed with my travel partner, Penny, in Dubai.",
    likes: 0,
  },
  {
    id: 30,
    path: "images/dublin_bridge.jpg",
    description: "Chad on a bridge in Central Dublin, Ireland.",
    likes: 0,
  },
  {
    id: 31,
    path: "images/fah_chad.jpg",
    description:
      "Posing with comedy troupe, Foil Arms & Hog after a performance in Dublin, Ireland.",
    likes: 0,
  },
  {
    id: 32,
    path: "images/dublin_cathedral.jpg",
    description: "Cathedral of Dublin, Ireland.",
    likes: 0,
  },
  {
    id: 33,
    path: "/images/fire_in_the_sky.jpg",
    description: "Another gorgeous sunset from my front porch in Colorado.",
    likes: 0,
  },
  {
    id: 34,
    path: "images/firey_sunset.jpg",
    description: "Gorgeous sunset from my front porch in Colorado.",
    likes: 0,
  },
  {
    id: 35,
    path: "images/gazebo.jpg",
    description: "Gazebo structure in the gardens of Versailles Palace.",
    likes: 0,
  },
  {
    id: 36,
    path: "images/guilded_fireplace.jpg",
    description: "Ornate fireplace in Versailles Palace.",
    likes: 0,
  },
  {
    id: 37,
    path: "images/have_you_seen_this_man.jpg",
    description:
      "The photo that will be shown should anything ever happen to me.",
    likes: 0,
  },
  {
    id: 38,
    path: "images/irish_pagan_sculpture.jpg",
    description: "Pagan sculpture at an Irish Heritage site.",
    likes: 0,
  },
  {
    id: 39,
    path: "images/jane_gare_du_nord.jpg",
    description:
      "Chad, or Jane, enjoying their coffee at the Gare Du Nord, Paris, France.",
    likes: 0,
  },
  {
    id: 40,
    path: "images/job_openings.jpeg",
    description:
      "Sign on a sewer cover: Now hiring Ninja Turtles, apply within.",
    likes: 0,
  },
  {
    id: 41,
    path: "images/kabul_mountains.jpg",
    description: "The northern view in Kabul, Afghanistan.",
    likes: 0,
  },
  {
    id: 42,
    path: "images/kosovo_cookout.jpg",
    description: "Open-fire cooking in Kosovo.",
    likes: 0,
  },
  {
    id: 43,
    path: "images/locks_pont_neuf.jpg",
    description: "Locks on a bridge near Pont Neuf, Paris, France.",
    likes: 0,
  },
  {
    id: 44,
    path: "images/london_bridge.jpg",
    description: "I checked. London Bridge has not fallen down.",
    likes: 0,
  },
  {
    id: 45,
    path: "images/macchiato_burek.jpg",
    description:
      "A macchiato and burek in Pristina, Kosovo. Cost about $4 total.",
    likes: 0,
  },
  {
    id: 46,
    path: "images/max.jpg",
    description: "My first dog, Max",
    likes: 0,
  },
  {
    id: 47,
    path: "images/mexican_ice_sculpture.jpg",
    description:
      "The Mexico entry to the International Snow Sculpting Championships.",
    likes: 0,
  },
  {
    id: 48,
    path: "images/mexican_ice_sculpture2.jpg",
    description:
      "The Mexico entry to the International Snow Sculpting Championships.",
    likes: 0,
  },
  {
    id: 49,
    path: "images/molly_malone.jpg",
    description: "Sculpture of Molly Malone in Dublin, Ireland.",
    likes: 0,
  },
  {
    id: 50,
    path: "images/montgomery_reservoir.jpg",
    description:
      "Montgomery Reservoir near Alma, Colorado. Elevation ~9.5K ft.",
    likes: 0,
  },
  {
    id: 51,
    path: "images/narrowest_building.jpg",
    description: "The narrowest building in Paris, about 2 meters wide.",
    likes: 0,
  },
  {
    id: 52,
    path: "images/neolithic_carvings.jpg",
    description:
      "Neolithic carvings inside a mound in Ireland. The site is older than the Egyptian Pyramids.",
    likes: 0,
  },
  {
    id: 53,
    path: "images/notre_dame.jpg",
    description: "Notre Dame, Paris, France.",
    likes: 0,
  },
  {
    id: 54,
    path: "images/original_liberty.jpg",
    description:
      "The original Statue of Liberty in Paris. This was made as a model for the statue gifted to the United States.",
    likes: 0,
  },
  {
    id: 55,
    path: "images/park_near_louvre.jpg",
    description: "A picturesque park near the Louvre in Paris.",
    likes: 0,
  },
  {
    id: 56,
    path: "images/queens_palace.jpg",
    description: "The Queen's Palace in Kabul, Afghanistan.",
    likes: 0,
  },
  {
    id: 57,
    path: "images/resort_kuwait.jpg",
    description: "Chad at a resort in Kuwait.",
    likes: 0,
  },
  {
    id: 58,
    path: "images/picturesque_village.jpg",
    description: "A picturesque village in Kosovo.",
    likes: 0,
  },
  {
    id: 59,
    path: "images/rodin_three_men.jpg",
    description: "Rodin sculpture at Musee Rodin, Paris, France.",
    likes: 0,
  },
  {
    id: 60,
    path: "images/rodin_woman.jpg",
    description: "Rodin sculpture at Musee Rodin, Paris, France.",
    likes: 10,
  },
  {
    id: 61,
    path: "images/royal_cottages_versailles.jpg",
    description:
      "Cottages built for the Queen of France and her three closest friends.",
    likes: 0,
  },
  {
    id: 62,
    path: "images/russian_horse.jpg",
    description: "Chad at a horse-back riding resort in Kosovo.",
    likes: 0,
  },

  {
    id: 64,
    path: "images/sam_houston_forest.jpg",
    description: "Sam Houston National Forest in Texas.",
    likes: 0,
  },
  {
    id: 65,
    path: "images/seawall_kuwait.jpg",
    description: "Chad standing on the seawall in Kuwait.",
    likes: 0,
  },
  {
    id: 66,
    path: "images/shambles_of_york.jpg",
    description: '"The Shambles" in York, England.',
    likes: 0,
  },
  {
    id: 67,
    path: "images/sign_post_1.jpg",
    description: "Sign post in Kosovo.",
    likes: 0,
  },
  {
    id: 68,
    path: "images/statue_in_gazebo.jpg",
    description: "Statue in the gazebo in the gardens of Versailles.",
    likes: 0,
  },
  {
    id: 69,
    path: "images/thomas_jefferson.jpg",
    description: "Statue of Thomas Jefferson in Paris.",
    likes: 0,
  },
  {
    id: 70,
    path: "images/tim_hortons.jpg",
    description: "Chad having some piping hot Tim Horton's coffee in Kuwait.",
    likes: 0,
  },

  {
    id: 72,
    path: "images/trim_castle.jpg",
    description: "Trim Castle in Ireland.",
    likes: 0,
  },
  {
    id: 73,
    path: "images/trim_castle_side.jpg",
    description: "Trime Castle in Ireland.",
    likes: 0,
  },
  {
    id: 74,
    path: "images/vet_services_pigeons.jpg",
    description: "Vet services sign for your cow, dog, or pigeon.",
    likes: 0,
  },
  {
    id: 75,
    path: "images/wheeler_lake.jpg",
    description:
      "Snow fed mountain lake, Wheeler Lake, near Alma and Leadville, Colorado. The lake is at 12K ft elevation.",
    likes: 0,
  },
];

module.exports = galleryItems;
