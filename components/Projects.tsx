import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" h-64 xl:h-80 md:h-72"
              src="
                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEUiHx+vDBniEiHjEiIfHx+kDRm0CxkZIB9lFx2qDBitDBmpDBgWIB8gHh+gCheqDRl6FRyTCBWGBhOaCRbqESIzHB4AIB+QCBVIHR+KBxSWCBWCBRN1AxERHx99BRLtEyPbESDREyEIHx+LGSC8FSF3FRtyGyDSEB8tHh+3FiG/DhxSHSCfGCAwHh9gHCC+DRyZGCCBFBtWHSA+Hh9vFBpmExldEhhTEhhFExhtBhKnFyCdGCCA1fRxAAAMp0lEQVR4nO2dC3PaSBLHhUYg87AwYgyRBJLAD2ycxInt7N7lvv/3unn29AhBtmr3Uuo6dXkJuJaUf9v/fs6YDYLeeuutt95666233nrrrbfeeuutt95666233nrr7f/Gol/Z/+Stv9M+/crO/pzR0+0v7Ol3gpyz+FDxi1ZdxWfeOvv+Orporz/OvfV3WjzhjLFQGJNfTD/RT+V3GP+5P/PW2c1ocNFGZ//j/E6Lck2iqBSreG2/FGX9dEanVAiXB2b8FWpK68HQPOGPs/a3UiFMRtw6EXEhTPZ8RqZUCIeJ1ibD3jMiNdF5RqZkCIc7BvJ0McicYvlNu0zJEA6SClIpmPGqTjbHVetbyRCO1g7QMTKoHCzkt60yJUM4SI6ceRFo8471Jr/btr2VDuFkyREOlH/zQn7tWmVKhnA0WNfaewxaGReN+p+Xth+VDOFgsBxxlGRsSjVw8hn/1lYSCREOc25YQKGhn3V2bZMQIcJxdmAud9oygVq4kL+1/KyECCf5gHvxB5OF9WTrgEGIcJBk3PVpjdpvBoyWekGJcFocbOdmBepY1evq6+kPS4lwnA8rN1DYGARfyhFqfloSKRFOlgVHtdALSfs8OMmmlAgHw3QH6rTR6GZg+bxlDiZFOF0k3IxOzokgU/Xi/kSmpAjHy0KHIDSmoReG4rF+b8qUFOEkSY/cKxXNtBry782CQYtwuF5yWxtgLmRh6Lob9kqaULSmJaoVzQWjes6bMqVFOF0Wr9xvt5u7t5M5mBbhOFlnFQJ0Qz7E48kcTItwImXqlURv3NcybRzS0CIUMk3NgIED0ZR7Mwd/9gcMaoTJOuV+VxO6SV+L9eC3NcQIx0leeicYzG3drGS5P2BQIxwu0zmHZaJhdVOw/IP/9HINMcLJdLkurEwbBmX/4J1gkCNMFuUOzi5c/KFpMeTej0yMUMg0T4fctab+3tSo1ztoo0e4zEqG0BjKpXAmhedgaoQyEIVMcYFAKym9YWT8ARUMeoRJni4qywag3jmNNwdTI5QyXW/wlG9kCofBCvSLkyk9QinTV44CzwPVrsUDxuzhMmDnCGW9SNeV7USxXNGO8eiyKUXCPCtrF4DoCkroWpwXkCk5QhWI5Yi7SxjuoAaeh/wbyJQg4XS5SDPXuTXOMXS9YDv4qQXhhBqhkOmmxudstui7fjzkcB5Mj3AyHebrcsDxri3Ez5UP3RxMkFAGYlpyW/xgjELLb/G8tkV/9jAZX0TsHKEKxGxzgASK86hr5OCgjSRhImQqD9pc8IVYq/q1nYMV4SXE7hGKQFQytccXVp7edj8Ma3NtYfYwnl50YgcJtUx3aIkIizf0hz1om31IwguInSQU9aJYVigA8RrcqvdZyzT+mFLzoQxEKVM4scBbYXeTIaz1TT5JeBGxi4SyXmQbedBmOhi8zLDBGfIb1bkpwjktQhmIQqY5d0EIYkUzsTloiz+G5Hw4mct6kW6gCw2buVR/T184FYSXETtIaAJx8wqNmxeCsCbWczBRwqGoF0VahZbLFQrmxg190BZ/JPQIJ1MrU+Q11HwbhzJ10CYILyN2klDJNJMDBnNbGlTvTR1Rc3D8gyahkmlh64UGcjti+7BThEtNeA6xi4QyEJOFkOmh0ZKCTE23Kg/aBKFEHJ91YicJdSBm5dyeYODmjYVwGVxeODWE52XaTUIZiEqmzXYUxaOEPARR/CNfLkXBIEcoAnFd4AHDJRrYfotccxULwvyiE7tLKOpFOeShy6aoK7Uv+Xwf/1gQJLT1ohBzsO9BfNNdxaNQ6WKREyVcZKmSqbdXDP2n/HF/tTZOPFMvOkuoZSoP2vw73zDv65Jxv7pary/KtLuESqYbbw6GnKrp1LOnPzLhRNnXkCJUFVHJ9Mi9dArTlC2O/ObPzMiUGKEMRFH0i0Vld/lQIoBTUR7/lWUXZdpdwqFsa4pN7VoaBtMUKhz1R6GdSJFQyXTEgQaNv/pB+pKPyjQzMm1F7CihaL5lIAonZrgkumHR7WvqTXpRpl0lNPVCOLGGLBN6lcNm1motZbo8K9MuEya5lOmAw/WaRu+tH/grOJEUoZoRVTYtKr8lRaXfpB5JuNAypUWo64WVKf79IFwvWChlmgnCMzLtLCHItBxWeGfq9sKg3d1FmXabUGTTtChbLpx6y35WFkQJrUx3blWDGhy3f+NJqXrT9kDsLKHtvsWAkZjPInBHGGiQUndPLsm064Sy6Jcm7JjnSezX4oJMu06oZHr0elPgg8sLfKo6NzUG0yIUbY3oTbNyyYEQmm8Gg6LcuRmZttWL7hLKGdEU/Y2fW8CfUDmqCzLtMqEnUy/NWFD7gk/KVGdTaoSq6MsBo3KFEN3MgPuYMGC0BGLnCbUTIccwdIHPilR8VWlhA5EQIZJpOeIQhv4Rhsk8asBYtAZixwmniZZpCje/QaqweVPPtUwpEhon/ntnNlB2oMCLU0nKF6WUaUtF7DKhk2m2eeS2PrghEbQqD9qOWqangUiAUHZu5buTKLSj3gKHbYp2mXad0Bb91b3LLj6ZeaxyI1NihFqmi6zYPtjltwtDtPwWDrUyJUVohkQ5B19HDPsMbcGh/ZYyFfWCHqGSaRqsnjnmwQLVD1UiOreWQKRBuMiu4yt+wuVOaCS4HDDyU5l2m1BlU9Gb5tl1NKtxx3ZyJ5OFvCx0vaBGqJyYXQf7nxwc5s/6prVRA0ZOlHC5vg7iNw6KNPrExUPLVNcLSoQWURBG0Q51M7B+g42GyKZp0VIvqBCKf2n/jTO0CoZCCNtvPtAypUYoi36yuA6C+MWtMbwsw+ypohwwZL2gRaidKAmDPf4dDLy2Mdk1rDIp00Ygdp3Q7jIk4faOe2ys4U7GRyLXiED0ru7TIBwqwuiW4wHflkW0GWZKpn4gdp9Q700lYbA6QsnHvZtdhuvzYFkvSBEOEOHshrtOBidUSyoGDBWI9AinmjB6Yi1x6BKPnINP6gUBQjVCKcJg/+w+YwltbNzIKA/ayBEOEOHsET7WvNnQGLfuTmRKgnBsCaMvNSyD3cIbJimZckpVL1BFJECoLrlpwmD1093kw0KFJpUPSxWI1AjHQ0Oo5uDmSaIXmgcpUxyIxAjlHIxOL8B/1ouic5MyxYFIgnAChGoOPq0UqEPl84ZMKRAOEGH8UuHFqc01qPLXm4wg4QQIg9WBuUYNX5SyWq3SVAYiLcIBItx+4w7KlglUMuSFUy8QyRFGn2CEwusoJF0tU2KEgykQBrMj2iHintR+gy+kTAkTijkYar3bvKFDN/4qZQqBSI8w+hR6hoqHJRfdtwtEeoTB6p7hVGpLvvugvipPFwk1wjkiVHMwni28qJRF/yhkCvWCIGEUuON7jOcyDt+s8yFhwmD1DMoEhSJ/iqK/TPPENt8UCcWA4c6A8VIKiuSudIFIkTCKalf0TyuHlGmxXlImdAOGX/tRSZwXEIgkCeOv8On7dmHD0JAoHg9SpqQIxx5hFOyY0yc04EizPBMyJUXo+zDYf4YBA62jXA/H+CC1gUiTMH6D9IImqBD0Kubg0gYiTcJgtfM6GXzV1JTEbJ2QJrQDhtfR4O6bj1ITiEQJo3f7y1B4rWi/pV4ImU4IE6KDNqdSPOmH1XqdkCbcfufIaZBg3P6GHQsdiFQJo1vovF0Q4lPTkBU6EKkSBtt7hktEc8CQB23rIWnC2SP8LxSYkyYOxl2akCaMbmuUalCD4xDT5YQyoZqD8ZyPjmrMgDFcTEkTxo8cotA50vWqYsBIh3QIx6eEwRY+i8Bbl7qZn6tAJELY4kN94RRP9vj0Ql84zSekCeO3yiUW28HZFk6h1umUNKE6aANZQjE0HY6ag2VFpExoDtpQBLomTv/i5SinTRi/cDzeu7YNBo56PSFNGMQ7VP5go4hu93HRmpImlHMw2mKgi1LGl/yY0CaUB21Io9aNsCsWXwvahHIOxv22HfFt0ZcfmTGhTWjnYDTt22RqGI8JbUJz0NaYMWBxI52Z0yZU58EQg/6i36xr5sQJ9Rzssgt+oUeM3ZgE4WhyhjCKGGfM/k5Jc7pQmNOOEo60DdRv5y0X6bl3zu7u74+73e5Q14wrw5+PLbPp8WuHCA3VPMnXdzcfV3++fHq/fQqu49m2+f8bd7Zd7ffbWfB0+/7p7erx+93n59fjobawgrH+sxOEc0mWZHcPf7y8fxHt2Gw2i+M4UvaX/gJpsXjbVvDGwdP7y9X3/zzfH1jFq06oNLh6e7+WvpjFf5Xpkina7Xa/Wu2f3h5e/vbf909Y/Pex2i2KZ50A7K233nrrrbfeeuutt95666233nrrrbfeeuutt95+j/0XxlMd+fumsHIAAAAASUVORK5CYII=    "
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1}:
                </span>{" "}
                UPS clone
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}