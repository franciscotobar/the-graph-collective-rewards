import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BackerRewardPercentageUpdateScheduled } from "../generated/schema"
import { BackerRewardPercentageUpdateScheduled as BackerRewardPercentageUpdateScheduledEvent } from "../generated/BackersManagerRootstockCollective/BackersManagerRootstockCollective"
import { handleBackerRewardPercentageUpdateScheduled } from "../src/backers-manager-rootstock-collective"
import { createBackerRewardPercentageUpdateScheduledEvent } from "./backers-manager-rootstock-collective-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let builder_ = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let rewardPercentage_ = BigInt.fromI32(234)
    let cooldown_ = BigInt.fromI32(234)
    let newBackerRewardPercentageUpdateScheduledEvent =
      createBackerRewardPercentageUpdateScheduledEvent(
        builder_,
        rewardPercentage_,
        cooldown_
      )
    handleBackerRewardPercentageUpdateScheduled(
      newBackerRewardPercentageUpdateScheduledEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BackerRewardPercentageUpdateScheduled created and stored", () => {
    assert.entityCount("BackerRewardPercentageUpdateScheduled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BackerRewardPercentageUpdateScheduled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "builder_",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BackerRewardPercentageUpdateScheduled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rewardPercentage_",
      "234"
    )
    assert.fieldEquals(
      "BackerRewardPercentageUpdateScheduled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cooldown_",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
