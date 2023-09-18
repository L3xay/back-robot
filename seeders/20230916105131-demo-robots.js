'use strict';

const now = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Robots', [
      { id: 1, name: 'R2-D2', info: 'Loyal astromech droid and a hero', status: 'Active', specification: 'Equipped with holographic projectors, repair tools', createdAt: now, updatedAt: now },
      { id: 2, name: 'WALL-E', info: 'Waste-collecting robot left to clean an abandoned Earth', status: 'Active', specification: 'Solar-powered, compacting trash, and capable of emotion', createdAt: now, updatedAt: now },
      { id: 3, name: 'Optimus Prime', info: 'Leader of the Autobots', status: 'Active', specification: 'Transforms into a truck, armed with energy weapons and a sword', createdAt: now, updatedAt: now },
      { id: 4, name: 'T-800', info: 'Cyborg assassin sent from the future to eliminate targets', status: 'Inactive', specification: 'Endoskeleton covered in living tissue, armed with advanced weaponry', createdAt: now, updatedAt: now },
      { id: 5, name: 'Ava', info: 'AI robot designed to pass the Turing test, manipulates humans', status: 'Active', specification: 'Humanoid appearance, advanced AI, and manipulative abilities', createdAt: now, updatedAt: now },
      { id: 6, name: 'RoboCop', info: 'Cyborg police officer', status: 'Active', specification: 'Armored exoskeleton, advanced weaponry, and law enforcement protocols', createdAt: now, updatedAt: now },
      { id: 7, name: 'C-3PO', info: 'Protocol droid fluent in over six million forms of communication', status: 'Inactive', specification: 'Gold-plated, etiquette and translation functions', createdAt: now, updatedAt: now },
      { id: 8, name: 'Chappie', info: 'Police droid who became a gangster', status: 'Active', specification: 'Titanium armor, AI consciousness, and armed with stun gun', createdAt: now, updatedAt: now },
      { id: 9, name: 'Astro Boy', info: 'Robot boy with human emotions, fights for justice', status: 'Active', specification: 'Rocket boots, laser cannons', createdAt: now, updatedAt: now },
      { id: 10, name: 'Sonny', info: 'Unique robot with the ability to feel emotions', status: 'Active', specification: 'Advanced positronic brain, human-like facial expressions', createdAt: now, updatedAt: now }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Robots', null, {});
  }
};
