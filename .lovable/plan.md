

## Instructors Page Redesign

### Overview

Enhance the Instructors page by adding a "Join Our Team" recruitment banner at the top, a specialty filter, and removing the bottom CTA section.

---

### Files to Modify

| File | Change |
|------|--------|
| `src/pages/Instructors.tsx` | Add banner, specialty filter, remove CTA section |
| `src/assets/teachers-team.png` | Copy the uploaded team image |

---

### Changes

#### 1. Add Team Image Asset

Copy the uploaded team image to the project assets folder for use in the recruitment banner.

---

#### 2. New "Join Our Team" Banner (After Hero Section)

Add a horizontal banner section similar to the reference image:

```text
+---------------------------------------------------------------+
|                                                               |
|  [Team Photo]    Do you have what it takes to                |
|                  JOIN OUR TEAM?         [APPLICATIONS OPEN]   |
|                                                               |
+---------------------------------------------------------------+
```

- Left side: Team image of instructors around the pole
- Right side: Italic heading "Do you have what it takes to" + bold "JOIN OUR TEAM?"
- Far right: Pink "APPLICATIONS OPEN" button
- Light gray/white background to contrast with the dark theme

---

#### 3. Specialty Filter Addition

Add a second filter dropdown next to the studio filter:

| Filter | Options |
|--------|---------|
| By Specialty | All Specialties, Pole, Aerial Silks, Aerial Hoop, Flexibility, Dance, Contortion, Strength Training, Tricks, Flow, Choreography, Exotic, Heels, Floor Work, Beginners, Fundamentals |

The filtering logic will check if the instructor's `specialties` array includes the selected specialty.

---

#### 4. Filter Section Layout

```text
            [Filter by Studio ▼]    [Filter by Specialty ▼]
```

Both filters centered, side by side with a small gap.

---

#### 5. Remove CTA Section

Remove lines 221-235 (the "Ready to Meet Your Instructors?" gradient section at the bottom).

---

### Technical Implementation

#### New State Variable
```typescript
const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
```

#### Updated Filter Logic
```typescript
const filteredInstructors = instructors.filter(i => {
  const matchesStudio = !selectedStudio || i.studioId === selectedStudio;
  const matchesSpecialty = !selectedSpecialty || i.specialties.includes(selectedSpecialty);
  return matchesStudio && matchesSpecialty;
});
```

#### Extract All Unique Specialties
```typescript
const allSpecialties = [...new Set(instructors.flatMap(i => i.specialties))].sort();
```

---

### Visual Summary

| Section | Before | After |
|---------|--------|-------|
| Hero | Title + description | Same (kept) |
| Banner | None | "Join Our Team" recruitment banner |
| Filters | Studio only | Studio + Specialty side by side |
| Instructor Cards | Bio displayed | Bio displayed (already present) |
| Teaching Philosophy | Present | Kept as-is |
| Bottom CTA | "Ready to Meet..." section | Removed |

---

### Image Asset

The uploaded team photo will be saved to `src/assets/teachers-team.png` and imported in the component for the recruitment banner.

