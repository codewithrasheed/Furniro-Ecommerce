import React from 'react'
import PageBanner from '@/components/PageBanner'
import { Trophy, Users2, Clock, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <> 
        <PageBanner title={"About"} desc={"Home > About"} />
        
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F9F1E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-[#B88E2F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-[#9F9F9F]">crafted from top materials</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F9F1E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-8 h-8 text-[#B88E2F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-[#9F9F9F]">Over 2 years</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F9F1E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#B88E2F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-[#9F9F9F]">Order over 150 $</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F9F1E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-[#B88E2F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24 / 7 Support</h3>
              <p className="text-[#9F9F9F]">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#FCF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[650px]">
              <Image
                src="/about-mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-[#9F9F9F] leading-relaxed">
                Furniro is a global furniture destination for people who want to make their home beautiful. Our mission is to help people create their dream home with quality furniture at affordable prices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B88E2F] rounded-full flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quality Materials</h3>
                    <p className="text-[#9F9F9F]">We use the highest quality materials</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B88E2F] rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">5 Years Warranty</h3>
                    <p className="text-[#9F9F9F]">We provide extended warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/team-member-1.jpeg"
                  alt="Jessica Brown"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jessica Brown</h3>
              <p className="text-[#9F9F9F]">Lead Designer</p>
            </div>

            <div className="text-center">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/team-member-2.jpeg"
                  alt="Michael Anderson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Anderson</h3>
              <p className="text-[#9F9F9F]">Product Manager</p>
            </div>

            <div className="text-center">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/team-member-3.jpeg"
                  alt="Sarah Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Wilson</h3>
              <p className="text-[#9F9F9F]">Interior Designer</p>
            </div>

            <div className="text-center">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/team-member-4.jpeg"
                  alt="David Thompson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Thompson</h3>
              <p className="text-[#9F9F9F]">Design Consultant</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About