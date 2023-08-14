import { useEffect, useState } from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ReactPlayer from 'react-player';

const { Storage } = require('@google-cloud/storage');

async function generateSignedUrl(episodeName, expiration = 60) {

    const storage = new Storage({
        projectId: process.env.GCP_PROJECT_ID,
        credentials: {
            type: 'service_account',
            project_id: process.env.GCP_PROJECT_ID,
            private_key_id: process.env.GCP_PRIVATE_KEY_ID,
            private_key: process.env.GCP_PRIVATE_KEY,
            client_email: process.env.GCP_CLIENT_EMAIL,
            client_id: process.env.GCP_CLIENT_ID,
            auth_uri: process.env.GCP_AUTH_URI,
            token_uri: process.env.GCP_TOKEN_URI,
            auth_provider_x509_cert_url: process.env.GCP_AUTH_PROVIDER_X509,
            client_x509_cert_url: process.env.GCP_CLIENT_X509
        }
    });

    const options = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + expiration * 1000, // Expiration time in milliseconds
    };

    const [url] = await storage.bucket(process.env.BUCKET).file(episodeName).getSignedUrl(options);
    return url;
}

function VideoComponent({ videoUrl }) {
    const [signedUrl, setSignedUrl] = useState('');
  
    useEffect(() => {
      async function fetchSignedUrl() {
        try {
          const url = await generateSignedUrl(videoUrl); // Assuming generateSignedUrl is defined somewhere
          setSignedUrl(url);
        } catch (error) {
          // Handle error if needed
        }
      }
  
      fetchSignedUrl();
    }, [videoUrl]);
  
    return (
      <div className="player-wrapper">
        {signedUrl && (
          <>
            <ReactPlayer
              url={signedUrl}
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls={true}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            />
          </>
        )}
      </div>
    );
  }
  
  export default VideoComponent;