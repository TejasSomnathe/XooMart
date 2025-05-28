import { asyncHandler } from "../utils/asyncHandler";

 

const viewShopDetailes = asyncHandler(async (req, res) => {
    try {
        const shopId = req.params._id;
        // Assuming you have a function to get shop details by ID
        const shopDetails = await getShopDetailsById(shopId);
        
        if (!shopDetails) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        res.status(200).json(shopDetails);
    } catch (error) {
        console.error('Error fetching shop details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { viewShopDetailes };