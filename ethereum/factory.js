import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// Need to prefic with NEXT_PUBLIC_ to ensure variable is exposed to the browser
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xa78dCe2222E6Eb6aE6C867C8C1A2324dF3d24A19"
);

export default instance;
