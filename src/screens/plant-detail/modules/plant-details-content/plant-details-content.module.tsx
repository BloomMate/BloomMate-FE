import { memo } from "react";
import { PlantDetailHeaderModule } from "../plant-detail-header";
import { PlantDetailDetailsModule } from "./plant-detail-details/plant-detail-details";
import { PlantDetailPictureModule } from "./plant-detail-picture";
import { PlantDetailGrowthModule } from "./plant-details-growth";
import { PlantDetailScreenNavigationProps } from "../../plant-detail.screen";
import { useNavigation } from "@react-navigation/native";
type PlantDetailContentModule = {};

export const PlantDetailContentModule = memo<PlantDetailContentModule>(() => {
    const navigation = useNavigation<PlantDetailScreenNavigationProps>();
    return (
        <PlantDetailHeaderModule/>
        <PlantDetailPictureModule/>
        <PlantDetailDetailsModule/>
        <PlantDetailGrowthModule/>
    );    
}) 
