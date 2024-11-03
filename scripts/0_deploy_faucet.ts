import { Deployer, DeployFunction } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { LendingBorrowing } from '../artifacts/ts'

const deployFaucet: DeployFunction<Settings> = async (deployer: Deployer): Promise<void> => {
  const result = await deployer.deployContract(LendingBorrowing, {
    initialFields: {
      collateralTokenId: '2AzrpxxrPTirUseiTUkkQUzMbwMPBpUcSG7B21rnb5uaP',
      loanTokenId: '27j1Vbn5XEMwfXVy4DSfBQJaUfeZYELWPxYNG9fdX11hK',
      collateralRatio: 2n,
      totalCollateral: 0n
    }
  })
  console.log('LendingBorrowing contract id: ' + result.contractInstance.contractId)
  console.log('LendingBorrowing contract address: ' + result.contractInstance.address)
}

export default deployFaucet
