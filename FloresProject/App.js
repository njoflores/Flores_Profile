import React, { useRef, useEffect } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import profile_icon from './assets/images/profile_pic.jpg'
import styles from './styles/profile.styles'

const UserProfileCard = () => {
  const star1 = useRef(new Animated.Value(1)).current
  const star2 = useRef(new Animated.Value(1)).current
  const star3 = useRef(new Animated.Value(1)).current
  const glow = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const twinkle = (star, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(star, { toValue: 0.3, duration: 1000, delay, useNativeDriver: true }),
          Animated.timing(star, { toValue: 1, duration: 1000, useNativeDriver: true }),
        ])
      ).start()
    }

    twinkle(star1, 0)
    twinkle(star2, 500)
    twinkle(star3, 1000)

    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 2000, useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    ).start()
  }, [])

  return (
    <View style={styles.upc}>
      <View style={styles.header}>
        <Animated.Text style={[styles.starOne, { opacity: star1 }]}>★</Animated.Text>
        <Animated.Text style={[styles.starTwo, { opacity: star2 }]}>★</Animated.Text>
        <Animated.Text style={[styles.starThree, { opacity: star3 }]}>★</Animated.Text>
      </View>

      <View style={styles.profileDown}>
        <View style={styles.profileImageWrapper}>
          <Animated.View style={[styles.glowRing, { opacity: glow }]} />
          <Image source={profile_icon} style={styles.profileImage} />
        </View>

        <Text style={styles.profileName}>Norman Joshua J. Flores</Text>
        <View style={styles.divider} />

        <Text style={styles.profileUsername}>Norman</Text>
        <View style={styles.divider} />

        <Text style={styles.profileBio}>
          I am 20 years old, I live in Makati City, I was born on February 13, 2005, Year of the Rooster. 
          I love playing games on my spare time, and I love spending time with my precious someone :D.
        </Text>
        <View style={styles.divider} />

        <Text style={styles.profileCourse}>Bachelor of Science in Information Technology</Text>
      </View>
    </View>
  )
}

export default UserProfileCard
