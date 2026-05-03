export interface QuestDefinition {
  readonly id: string;
  readonly value: number;
}

export const Constants = {
  Quests: {
    FlashlightActivated: { id: "flashlight_activated", value: 20 },
    LGGUnlocked: { id: "lgg_unlocked", value: 20 },
    GeraldDefeated: { id: "gerald_defeated", value: 20 },
    LanternLit: { id: "lantern_lit", value: 15 },
    LanternMarkings: { id: "lantern_markings", value: 10 },
    DigitCourt: { id: "digit_court", value: 10 },
    DigitShed: { id: "digit_shed", value: 10 },
    DigitTub: { id: "digit_tub", value: 10 },
    DigitBlind: { id: "digit_blind", value: 10 },
    CabinCodeEntered: { id: "cabin_code_entered", value: 10 },
    Win: { id: "win", value: 25 },
    PickleballPlayed: { id: "pickleball_played", value: 20 },
    FireLit: { id: "fire_lit", value: 15 },
    SatByFire: { id: "sat_by_fire", value: 5 },
    DucksRaced: { id: "ducks_raced", value: 15 },
    ArmadilloReturned: { id: "armadillo_returned", value: 20 },
    GeraldSpotted: { id: "gerald_spotted", value: 10 },
    HotTubSoaked: { id: "hot_tub_soaked", value: 10 },
    DrinkMixed: { id: "drink_mixed", value: 10 },
    AntlerExamined: { id: "antler_examined", value: 5 },
  } satisfies Record<string, QuestDefinition>,
};
