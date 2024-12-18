import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BackerRewardPercentageUpdateScheduled,
  BuilderActivated,
  BuilderMigrated,
  BuilderRewardReceiverReplacementApproved,
  BuilderRewardReceiverReplacementCancelled,
  BuilderRewardReceiverReplacementRequested,
  CommunityApproved,
  Dewhitelisted,
  GaugeCreated,
  Initialized,
  KYCApproved,
  KYCRevoked,
  NewAllocation,
  NewCycleDurationScheduled,
  NewDistributionDuration,
  NotifyReward,
  Paused,
  Permitted,
  Revoked,
  RewardDistributed,
  RewardDistributionFinished,
  RewardDistributionStarted,
  Unpaused,
  Upgraded
} from "../generated/BackersManager/BackersManager"

export function createBackerRewardPercentageUpdateScheduledEvent(
  builder_: Address,
  rewardPercentage_: BigInt,
  cooldown_: BigInt
): BackerRewardPercentageUpdateScheduled {
  let backerRewardPercentageUpdateScheduledEvent =
    changetype<BackerRewardPercentageUpdateScheduled>(newMockEvent())

  backerRewardPercentageUpdateScheduledEvent.parameters = new Array()

  backerRewardPercentageUpdateScheduledEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  backerRewardPercentageUpdateScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPercentage_",
      ethereum.Value.fromUnsignedBigInt(rewardPercentage_)
    )
  )
  backerRewardPercentageUpdateScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "cooldown_",
      ethereum.Value.fromUnsignedBigInt(cooldown_)
    )
  )

  return backerRewardPercentageUpdateScheduledEvent
}

export function createBuilderActivatedEvent(
  builder_: Address,
  rewardReceiver_: Address,
  rewardPercentage_: BigInt
): BuilderActivated {
  let builderActivatedEvent = changetype<BuilderActivated>(newMockEvent())

  builderActivatedEvent.parameters = new Array()

  builderActivatedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  builderActivatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardReceiver_",
      ethereum.Value.fromAddress(rewardReceiver_)
    )
  )
  builderActivatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPercentage_",
      ethereum.Value.fromUnsignedBigInt(rewardPercentage_)
    )
  )

  return builderActivatedEvent
}

export function createBuilderMigratedEvent(
  builder_: Address,
  migrator_: Address
): BuilderMigrated {
  let builderMigratedEvent = changetype<BuilderMigrated>(newMockEvent())

  builderMigratedEvent.parameters = new Array()

  builderMigratedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  builderMigratedEvent.parameters.push(
    new ethereum.EventParam("migrator_", ethereum.Value.fromAddress(migrator_))
  )

  return builderMigratedEvent
}

export function createBuilderRewardReceiverReplacementApprovedEvent(
  builder_: Address,
  newRewardReceiver_: Address
): BuilderRewardReceiverReplacementApproved {
  let builderRewardReceiverReplacementApprovedEvent =
    changetype<BuilderRewardReceiverReplacementApproved>(newMockEvent())

  builderRewardReceiverReplacementApprovedEvent.parameters = new Array()

  builderRewardReceiverReplacementApprovedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  builderRewardReceiverReplacementApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardReceiver_",
      ethereum.Value.fromAddress(newRewardReceiver_)
    )
  )

  return builderRewardReceiverReplacementApprovedEvent
}

export function createBuilderRewardReceiverReplacementCancelledEvent(
  builder_: Address,
  newRewardReceiver_: Address
): BuilderRewardReceiverReplacementCancelled {
  let builderRewardReceiverReplacementCancelledEvent =
    changetype<BuilderRewardReceiverReplacementCancelled>(newMockEvent())

  builderRewardReceiverReplacementCancelledEvent.parameters = new Array()

  builderRewardReceiverReplacementCancelledEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  builderRewardReceiverReplacementCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardReceiver_",
      ethereum.Value.fromAddress(newRewardReceiver_)
    )
  )

  return builderRewardReceiverReplacementCancelledEvent
}

export function createBuilderRewardReceiverReplacementRequestedEvent(
  builder_: Address,
  newRewardReceiver_: Address
): BuilderRewardReceiverReplacementRequested {
  let builderRewardReceiverReplacementRequestedEvent =
    changetype<BuilderRewardReceiverReplacementRequested>(newMockEvent())

  builderRewardReceiverReplacementRequestedEvent.parameters = new Array()

  builderRewardReceiverReplacementRequestedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  builderRewardReceiverReplacementRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardReceiver_",
      ethereum.Value.fromAddress(newRewardReceiver_)
    )
  )

  return builderRewardReceiverReplacementRequestedEvent
}

export function createCommunityApprovedEvent(
  builder_: Address
): CommunityApproved {
  let communityApprovedEvent = changetype<CommunityApproved>(newMockEvent())

  communityApprovedEvent.parameters = new Array()

  communityApprovedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return communityApprovedEvent
}

export function createDewhitelistedEvent(builder_: Address): Dewhitelisted {
  let dewhitelistedEvent = changetype<Dewhitelisted>(newMockEvent())

  dewhitelistedEvent.parameters = new Array()

  dewhitelistedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return dewhitelistedEvent
}

export function createGaugeCreatedEvent(
  builder_: Address,
  gauge_: Address,
  creator_: Address
): GaugeCreated {
  let gaugeCreatedEvent = changetype<GaugeCreated>(newMockEvent())

  gaugeCreatedEvent.parameters = new Array()

  gaugeCreatedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  gaugeCreatedEvent.parameters.push(
    new ethereum.EventParam("gauge_", ethereum.Value.fromAddress(gauge_))
  )
  gaugeCreatedEvent.parameters.push(
    new ethereum.EventParam("creator_", ethereum.Value.fromAddress(creator_))
  )

  return gaugeCreatedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createKYCApprovedEvent(builder_: Address): KYCApproved {
  let kycApprovedEvent = changetype<KYCApproved>(newMockEvent())

  kycApprovedEvent.parameters = new Array()

  kycApprovedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return kycApprovedEvent
}

export function createKYCRevokedEvent(builder_: Address): KYCRevoked {
  let kycRevokedEvent = changetype<KYCRevoked>(newMockEvent())

  kycRevokedEvent.parameters = new Array()

  kycRevokedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return kycRevokedEvent
}

export function createNewAllocationEvent(
  backer_: Address,
  gauge_: Address,
  allocation_: BigInt
): NewAllocation {
  let newAllocationEvent = changetype<NewAllocation>(newMockEvent())

  newAllocationEvent.parameters = new Array()

  newAllocationEvent.parameters.push(
    new ethereum.EventParam("backer_", ethereum.Value.fromAddress(backer_))
  )
  newAllocationEvent.parameters.push(
    new ethereum.EventParam("gauge_", ethereum.Value.fromAddress(gauge_))
  )
  newAllocationEvent.parameters.push(
    new ethereum.EventParam(
      "allocation_",
      ethereum.Value.fromUnsignedBigInt(allocation_)
    )
  )

  return newAllocationEvent
}

export function createNewCycleDurationScheduledEvent(
  newCycleDuration_: BigInt,
  cooldownEndTime_: BigInt
): NewCycleDurationScheduled {
  let newCycleDurationScheduledEvent = changetype<NewCycleDurationScheduled>(
    newMockEvent()
  )

  newCycleDurationScheduledEvent.parameters = new Array()

  newCycleDurationScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "newCycleDuration_",
      ethereum.Value.fromUnsignedBigInt(newCycleDuration_)
    )
  )
  newCycleDurationScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "cooldownEndTime_",
      ethereum.Value.fromUnsignedBigInt(cooldownEndTime_)
    )
  )

  return newCycleDurationScheduledEvent
}

export function createNewDistributionDurationEvent(
  newDistributionDuration_: BigInt,
  by_: Address
): NewDistributionDuration {
  let newDistributionDurationEvent = changetype<NewDistributionDuration>(
    newMockEvent()
  )

  newDistributionDurationEvent.parameters = new Array()

  newDistributionDurationEvent.parameters.push(
    new ethereum.EventParam(
      "newDistributionDuration_",
      ethereum.Value.fromUnsignedBigInt(newDistributionDuration_)
    )
  )
  newDistributionDurationEvent.parameters.push(
    new ethereum.EventParam("by_", ethereum.Value.fromAddress(by_))
  )

  return newDistributionDurationEvent
}

export function createNotifyRewardEvent(
  rewardToken_: Address,
  sender_: Address,
  amount_: BigInt
): NotifyReward {
  let notifyRewardEvent = changetype<NotifyReward>(newMockEvent())

  notifyRewardEvent.parameters = new Array()

  notifyRewardEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken_",
      ethereum.Value.fromAddress(rewardToken_)
    )
  )
  notifyRewardEvent.parameters.push(
    new ethereum.EventParam("sender_", ethereum.Value.fromAddress(sender_))
  )
  notifyRewardEvent.parameters.push(
    new ethereum.EventParam(
      "amount_",
      ethereum.Value.fromUnsignedBigInt(amount_)
    )
  )

  return notifyRewardEvent
}

export function createPausedEvent(builder_: Address, reason_: Bytes): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  pausedEvent.parameters.push(
    new ethereum.EventParam("reason_", ethereum.Value.fromFixedBytes(reason_))
  )

  return pausedEvent
}

export function createPermittedEvent(
  builder_: Address,
  rewardPercentage_: BigInt,
  cooldown_: BigInt
): Permitted {
  let permittedEvent = changetype<Permitted>(newMockEvent())

  permittedEvent.parameters = new Array()

  permittedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )
  permittedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPercentage_",
      ethereum.Value.fromUnsignedBigInt(rewardPercentage_)
    )
  )
  permittedEvent.parameters.push(
    new ethereum.EventParam(
      "cooldown_",
      ethereum.Value.fromUnsignedBigInt(cooldown_)
    )
  )

  return permittedEvent
}

export function createRevokedEvent(builder_: Address): Revoked {
  let revokedEvent = changetype<Revoked>(newMockEvent())

  revokedEvent.parameters = new Array()

  revokedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return revokedEvent
}

export function createRewardDistributedEvent(
  sender_: Address
): RewardDistributed {
  let rewardDistributedEvent = changetype<RewardDistributed>(newMockEvent())

  rewardDistributedEvent.parameters = new Array()

  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam("sender_", ethereum.Value.fromAddress(sender_))
  )

  return rewardDistributedEvent
}

export function createRewardDistributionFinishedEvent(
  sender_: Address
): RewardDistributionFinished {
  let rewardDistributionFinishedEvent = changetype<RewardDistributionFinished>(
    newMockEvent()
  )

  rewardDistributionFinishedEvent.parameters = new Array()

  rewardDistributionFinishedEvent.parameters.push(
    new ethereum.EventParam("sender_", ethereum.Value.fromAddress(sender_))
  )

  return rewardDistributionFinishedEvent
}

export function createRewardDistributionStartedEvent(
  sender_: Address
): RewardDistributionStarted {
  let rewardDistributionStartedEvent = changetype<RewardDistributionStarted>(
    newMockEvent()
  )

  rewardDistributionStartedEvent.parameters = new Array()

  rewardDistributionStartedEvent.parameters.push(
    new ethereum.EventParam("sender_", ethereum.Value.fromAddress(sender_))
  )

  return rewardDistributionStartedEvent
}

export function createUnpausedEvent(builder_: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("builder_", ethereum.Value.fromAddress(builder_))
  )

  return unpausedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
