export type TargetArea = 'ankles' | 'hips' | 'upper_back' | 'shoulders' | 'knees';

export interface Exercise {
  id: string;
  name: string;
  target_area: TargetArea;
  priority_weight: 1 | 2 | 3;
  instructions: string;
  surf_benefit: string;
  sets_reps: string;
  difficulty: 1 | 2 | 3;
  images?: { start?: number; end?: number };
  image_url?: string | null;
  video_url?: string | null;
  animation_url?: string | null;
}

export const exerciseLibrary: Exercise[] = [
  // ANKLES
  {
    id: 'ankle_wall_stretch',
    name: 'Wall Ankle Stretch',
    target_area: 'ankles',
    priority_weight: 3,
    instructions:
      'Face a wall, put one foot forward with toes touching the wall base. Bend your knee toward the wall keeping your heel glued to the floor. Move your foot gradually further from the wall as it gets easier.',
    surf_benefit: "Lets you stay low on the board without your heels lifting off.",
    sets_reps: '3x30sec each side',
    difficulty: 1,
    images: {
      start: require('../assets/exercises/wall-ankle-stretch-start.jpg'),
      end: require('../assets/exercises/wall-ankle-stretch-end.jpg'),
    },
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'ankle_heel_raises',
    name: 'Heel Raises',
    target_area: 'ankles',
    priority_weight: 2,
    instructions:
      'Stand with feet hip-width apart, slowly rise onto your toes, hold 2 seconds at the top, lower slowly over 3 seconds. Use a wall for balance if needed.',
    surf_benefit: 'Gives you the explosive push to pop up fast.',
    sets_reps: '3x15 reps',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'ankle_banded_flexes',
    name: 'Banded Ankle Flexes (no band version)',
    target_area: 'ankles',
    priority_weight: 2,
    instructions:
      'Sit with legs straight, point your toes away from you as far as possible, then pull them back toward your shin as hard as you can. Move slowly and deliberately.',
    surf_benefit: 'Unlocks the ankle range you need to absorb bumps on the wave.',
    sets_reps: '3x20 reps',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },

  // HIPS
  {
    id: 'hips_90_90_switch',
    name: '90/90 Hip Switch',
    target_area: 'hips',
    priority_weight: 3,
    instructions:
      'Sit on the floor with both knees bent at 90 degrees, one in front and one to the side. Keep your back tall and lean gently forward until you feel a deep stretch. Switch sides.',
    surf_benefit: 'Opens up your hips so you can get low and rotate into turns.',
    sets_reps: '3x30sec each side',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'hips_half_kneeling_stretch',
    name: 'Half Kneeling Hip Flexor Stretch',
    target_area: 'hips',
    priority_weight: 3,
    instructions:
      'Kneel on one knee, front foot flat on the floor. Squeeze your back glute and push your hips gently forward until you feel a stretch in the front of your back leg.',
    surf_benefit: 'Undoes sitting damage so you can stand tall on the board instead of hunching.',
    sets_reps: '3x30sec each side',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'hips_deep_lunge_rotation',
    name: 'Deep Lunge with Rotation',
    target_area: 'hips',
    priority_weight: 2,
    instructions:
      'Step into a deep lunge, place both hands inside your front foot. Lift one hand and rotate your chest open toward the ceiling. Follow your hand with your eyes.',
    surf_benefit: 'Trains your body to drop low AND rotate at the same time — exactly what carving requires.',
    sets_reps: '3x8 each side',
    difficulty: 2,
    image_url: null,
    video_url: null,
    animation_url: null,
  },

  // UPPER BACK
  {
    id: 'upper_back_cat_cow',
    name: 'Cat-Cow (slow and segmental)',
    target_area: 'upper_back',
    priority_weight: 3,
    instructions:
      'On hands and knees, slowly round your back up toward the ceiling one vertebra at a time, then reverse and drop your belly toward the floor lifting your chest. Move as slowly as possible.',
    surf_benefit: "Frees up your mid-back so paddling doesn't wreck your lower back.",
    sets_reps: '2x10 reps',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'upper_back_quad_rotation',
    name: 'Quadruped Thoracic Rotation',
    target_area: 'upper_back',
    priority_weight: 3,
    instructions:
      'On hands and knees, place one hand behind your head. Bring that elbow down to touch your opposite forearm, then rotate it up toward the ceiling as far as you can.',
    surf_benefit: 'Unlocks the twist you need to look where you\'re going and drive turns from your upper body.',
    sets_reps: '3x10 each side',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'upper_back_wide_rotation',
    name: 'Wide Stance Rotation',
    target_area: 'upper_back',
    priority_weight: 2,
    instructions:
      'Stand wide, hinge forward and touch one hand to the floor or opposite ankle. Reach the other hand straight up to the ceiling, follow it with your eyes.',
    surf_benefit: 'Connects your upper body rotation to a stable lower body — the foundation of powerful surfing.',
    sets_reps: '3x8 each side',
    difficulty: 2,
    image_url: null,
    video_url: null,
    animation_url: null,
  },

  // SHOULDERS
  {
    id: 'shoulders_cars',
    name: 'Shoulder CARs (Controlled Articular Rotations)',
    target_area: 'shoulders',
    priority_weight: 2,
    instructions:
      'Stand tall, slowly make the biggest possible circle with one arm — forward, up, back, and down. Go as slowly as you can and squeeze through tight spots.',
    surf_benefit: 'Keeps your shoulders healthy for thousands of paddle strokes.',
    sets_reps: '2x5 each direction each arm',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'shoulders_sleeper_stretch',
    name: 'Sleeper Stretch',
    target_area: 'shoulders',
    priority_weight: 2,
    instructions:
      'Lie on your side with your bottom arm straight out, elbow bent 90 degrees. Gently press your forearm toward the floor with your other hand. Stop when you feel a stretch in the back of your shoulder.',
    surf_benefit: 'Fixes the tight shoulder muscles that paddling builds up over time.',
    sets_reps: '3x30sec each side',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'shoulders_down_dog_cobra',
    name: 'Downward Dog to Cobra Flow',
    target_area: 'shoulders',
    priority_weight: 1,
    instructions:
      'Start in an upside-down V shape, push your chest back toward your thighs. Then swoop forward into a cobra, chest up, shoulders pulled back. Flow back and forth smoothly.',
    surf_benefit: 'Builds the push-and-extend pattern you need for duck dives and pop-ups.',
    sets_reps: '2x8 reps',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },

  // KNEES
  {
    id: 'knees_wall_sit',
    name: 'Wall Sit',
    target_area: 'knees',
    priority_weight: 2,
    instructions:
      'Back against a wall, slide down until your thighs are parallel to the floor. Keep your knees over your ankles, not past your toes. Hold as long as you can.',
    surf_benefit: 'Builds the leg endurance you need to stay crouched on the board without your legs giving out.',
    sets_reps: '3x30sec',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'knees_straight_leg_raise',
    name: 'Straight Leg Raise',
    target_area: 'knees',
    priority_weight: 1,
    instructions:
      'Lie on your back, one knee bent. Keep the other leg perfectly straight, tighten your thigh, and lift it one foot off the ground. Lower slowly.',
    surf_benefit: 'Strengthens the muscles that protect your kneecap from impact.',
    sets_reps: '3x12 each leg',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
  {
    id: 'knees_single_leg_balance',
    name: 'Single Leg Balance',
    target_area: 'knees',
    priority_weight: 2,
    instructions:
      'Stand barefoot on one leg. Once stable, try closing your eyes. Fight to keep your balance for 30 seconds.',
    surf_benefit: 'Trains the same instant balance reactions you need on a moving board.',
    sets_reps: '3x30sec each leg',
    difficulty: 1,
    image_url: null,
    video_url: null,
    animation_url: null,
  },
];

/**
 * Maps a free-text restriction area (from AI analysis) to a TargetArea enum value.
 * Uses case-insensitive substring matching.
 */
function matchArea(area: string): TargetArea | null {
  const lower = area.toLowerCase();
  if (lower.includes('ankle')) return 'ankles';
  if (lower.includes('hip')) return 'hips';
  if (lower.includes('upper') && lower.includes('back')) return 'upper_back';
  if (lower.includes('thoracic') || lower.includes('mid') && lower.includes('back')) return 'upper_back';
  if (lower.includes('shoulder')) return 'shoulders';
  if (lower.includes('knee')) return 'knees';
  return null;
}

/**
 * Returns the top 3 exercises matching the user's restriction areas,
 * sorted by priority_weight descending.
 */
export function getTopExercises(restrictionAreas: string[]): Exercise[] {
  const matchedAreas = new Set<TargetArea>();
  for (const area of restrictionAreas) {
    const matched = matchArea(area);
    if (matched) matchedAreas.add(matched);
  }

  const matching = exerciseLibrary.filter(e => matchedAreas.has(e.target_area));
  matching.sort((a, b) => b.priority_weight - a.priority_weight);
  return matching.slice(0, 3);
}
