import { useEffect } from "react";
import { hooks, network } from "../../connectors/network";
import { Accounts } from "../Accounts";
import { Card } from "../Card";
import { Chain } from "../Chain";
import { ConnectWithSelect } from "../ConnectWithSelect";
import { Status } from "../Status";
import { ethers } from "ethers";

import CampaignFactory from "../../ethereum/build/CampaignFactory.json";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function NetworkCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate(4);
  }, []);

  // useEffect(() => {
  //   const foo = async () => {
  //     const a = new ethers.Contract(
  //       process.env.NEXT_PUBLIC_FACTORY_ADDRESS,
  //       CampaignFactory.abi,
  //       provider
  //     );
  //     console.log(await a.getDeployedCampaigns());
  //   };
  //   foo();
  // }, []);

  return (
    <Card>
      <div>
        {console.log(provider)}
        <b>Network</b>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: "1rem" }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: "1rem" }} />
      <ConnectWithSelect
        connector={network}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </Card>
  );
}
