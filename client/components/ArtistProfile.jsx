import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ArtistProfile = ({ artist }) => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="show"
    className="max-w-2xl mx-auto px-6 py-10"
  >
    <div className="flex mb-10">
      <motion.img 
        variants={childVariants}
        className="w-24 h-24 mr-6 rounded-full object-cover"
        console.log({artist.profilePictureUrl})
        src={artist.profilePictureUrl} 
        alt={artist.name} 
      />
      <div>
        <motion.h2 variants={childVariants} className="text-2xl font-bold mb-2">{artist.name}</motion.h2>
        <motion.p variants={childVariants} className="text-sm text-gray-600">{artist.style}</motion.p>
        <motion.p variants={childVariants} className="text-sm text-gray-600">{artist.email}</motion.p>
        <motion.p variants={childVariants} className="text-sm text-gray-600">{artist.phone}</motion.p>
        <motion.p variants={childVariants} className="text-sm text-gray-600">{artist.bio}</motion.p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      {artist.tattoos.map(tattoo => (
        <motion.img 
          key={tattoo._id}
          variants={childVariants}
          className="w-full h-auto object-cover rounded-md"
          src={tattoo.image}
          alt={tattoo.name} 
        />
      ))}
    </div>
  </motion.div>
);

export default ArtistProfile;
