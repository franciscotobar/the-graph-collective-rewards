import {
  BackerRewardsClaimed as BackerRewardsClaimedEvent,
  BuilderRewardsClaimed as BuilderRewardsClaimedEvent,
  Initialized as InitializedEvent,
  NewAllocation as NewAllocationEvent,
  NotifyReward as NotifyRewardEvent,
} from "../generated/GaugeRootstockCollective/GaugeRootstockCollective"
import {
  BackerRewardsClaimed,
  BuilderRewardsClaimed,
  Initialized,
  NewAllocation,
  NotifyReward,
} from "../generated/schema"

export function handleBackerRewardsClaimed(
  event: BackerRewardsClaimedEvent,
): void {
  let entity = new BackerRewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.rewardToken_ = event.params.rewardToken_
  entity.backer_ = event.params.backer_
  entity.amount_ = event.params.amount_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBuilderRewardsClaimed(
  event: BuilderRewardsClaimedEvent,
): void {
  let entity = new BuilderRewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.rewardToken_ = event.params.rewardToken_
  entity.builder_ = event.params.builder_
  entity.amount_ = event.params.amount_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAllocation(event: NewAllocationEvent): void {
  let entity = new NewAllocation(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.backer_ = event.params.backer_
  entity.allocation_ = event.params.allocation_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNotifyReward(event: NotifyRewardEvent): void {
  let entity = new NotifyReward(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.rewardToken_ = event.params.rewardToken_
  entity.builderAmount_ = event.params.builderAmount_
  entity.backersAmount_ = event.params.backersAmount_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
