import {
  getSecretDeployerKey,
  getSecretRpcEndpoint,
} from '../../../src/agents';
import {
  ChainName,
  ChainConfig,
  ChainConfigJson,
} from '../../../src/config/chain';

export async function getChain(
  environment: string,
  deployerKeySecretName: string,
) {
  const name = ChainName.MUMBAI;
  const chainJson: ChainConfigJson = {
    name,
    rpc: await getSecretRpcEndpoint(environment, name),
    deployerKey: await getSecretDeployerKey(deployerKeySecretName),
    domain: 80001,
    confirmations: 3,
    weth: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
  };
  return new ChainConfig(chainJson);
}