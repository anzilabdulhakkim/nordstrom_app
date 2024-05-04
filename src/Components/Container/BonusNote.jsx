import { Box, Image } from '@chakra-ui/react';

import BonusImage from '../../Images/Bonus.png';

function BonusNote() {
  return (
    <Box>
      <Image mb="20px" src={BonusImage} alt="Bonus" />
      <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="Nordstrom" />
    </Box>
  );
}

export default BonusNote;
