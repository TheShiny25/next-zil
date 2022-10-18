import { gsap, Sine } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const randomSign = () => Math.round(Math.random()) * 2 - 1;

const animateIn = (target, options = {}) => {
  const { triggerElement, triggerStart, y, yPercent, duration, ...rest } = options;

  return gsap.from(target, {
    scrollTrigger: {
      trigger: triggerElement || target,
      start: triggerStart || 'top 75%',
    },
    opacity: 0,
    y: options.y,
    yPercent: yPercent ?? (y ? null : 30),
    duration: duration || 1,
    ...rest,
  });
};

export const useAnimateIn = (targets, options = {}) => {
  const { triggerElement: optTriggerElement, guard, ...rest } = options;

  useEffect(() => {
    if (!guard || guard()) {
      const targetElems = (Array.isArray(targets) ? targets : [targets]).map((ref) => ref.current ?? ref);
      const triggerElement =
        optTriggerElement === 'each'
          ? undefined
          : (optTriggerElement && optTriggerElement.current) || optTriggerElement || targetElems[0];
      const anims = targetElems.map((target) => animateIn(target, { ...rest, triggerElement }));

      return () => anims.forEach((anim) => anim.kill());
    }

    return undefined;
  }, [targets, guard, optTriggerElement, rest]);
};

export const useFloatingAnimation = (elementRef, options = {}) => {
  useEffect(() => {
    const targets = Array.isArray(elementRef) ? elementRef.map((ref) => ref.current) : [elementRef.current];
    const moveTargets = (tgts) => {
      tgts.forEach((target) => {
        const xPercent = 1.2 * (Math.random() * 5 + 5) * randomSign();
        const yPercent = 1.2 * (Math.random() * 5 + 15) * randomSign();
        const duration = 1.2 * (Math.random() * 7 + 10);
        gsap.to(target, {
          xPercent,
          yPercent,
          duration: duration || 1,
          ease: Sine.easeInOut,
          onComplete: () => moveTargets([target]),
        });
      });
    };
    moveTargets(targets);
  }, [elementRef]);
};

export const useAccordionBreathAnimation = (elementRefs, options = {}) => {
  useEffect(() => {
    const elements = elementRefs.map((ref) => ref.current);
    const moveTargets = (targets, direction, indexOffset = 0) => {
      targets.forEach((target, index) => {
        const xPercent =
          direction === -1 && index + indexOffset < 3
            ? 0
            : 2 ** (index + indexOffset) * direction + (direction === 1 ? 10 : -10);
        const scaleY = 1 + (direction === 1 ? 0.25 : -0.1);
        gsap.to(target, {
          xPercent,
          scaleY,
          duration: 7.5,
          transformOrigin: 'right center',
          ease: Sine.easeInOut,
          onComplete: () => moveTargets([target], -1 * direction, index + indexOffset),
        });
      });
    };
    moveTargets(elements, -1);
  }, [elementRefs]);
};

export const useSunshineAnimation = (elementRef, options = {}) => {
  useEffect(() => {
    const target = elementRef.current;
    gsap.to(target, {
      xPercent: 0,
      yPercent: -30,
      duration: 5,
      ease: Sine.easeOut,
    });
  }, [elementRef]);
};
