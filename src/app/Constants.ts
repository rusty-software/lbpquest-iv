export interface QuestDefinition {
  readonly id: string;
  readonly value: number;
}

export const Constants = {
  Quests: {
    FlashlightActivated: { id: "flashlight_activated", value: 5 },
    LGGUnlocked: { id: "lgg_unlocked", value: 10 },
    GeraldDefeated: { id: "gerald_defeated", value: 5 },
    LanternLit: { id: "lantern_lit", value: 3 },
    LanternMarkings: { id: "lantern_markings", value: 2 },
    DigitCourt: { id: "digit_court", value: 2 },
    DigitShed: { id: "digit_shed", value: 2 },
    DigitTub: { id: "digit_tub", value: 2 },
    DigitBlind: { id: "digit_blind", value: 2 },
    CabinCodeEntered: { id: "cabin_code_entered", value: 10 },
    Win: { id: "win", value: 20 },
  } satisfies Record<string, QuestDefinition>,
};
