import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { TokenVault } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployFaucet: DeployFunction<Settings> = async (deployer: Deployer): Promise<void> => {
  const result = await deployer.deployContract(TokenVault, {
    // The initial states of the faucet contract
    initialFields: {
      tokenHeldId: '2AzrpxxrPTirUseiTUkkQUzMbwMPBpUcSG7B21rnb5uaP',
      amountHeld: 0n,
      tokenReleasedId: '29SH9mpQVXHrZ9xRpMpnKkq8CTqaY8FyFh4e4wuA4R1eF',
      amountToRelease: 0n
    }
  })
  console.log('Token faucet contract id: ' + result.contractInstance.contractId)
  console.log('Token faucet contract address: ' + result.contractInstance.address)
}

export default deployFaucet
