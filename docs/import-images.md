---
title: Import images
---

Container images are cached locally on each node by the containerd image store. Images can be pulled from the registry as needed by pods, preloaded via image pull, or imported from an image tarball.

## On-demand image pulling

Kubernetes, by default, automatically pulls images when a Pod requires them if the image is not already present on the node. This behavior can be changed by using the [image pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) field of the Pod. When using the default `IfNotPresent` policy, containerd will pull the image from either upstream (default) or your [private registry](install/private_registry.md) and store it in its image store. Users do not need to apply any additional configuration for on-demand image pulling to work.


## Pre-import images
:::info Version Gate
The pre-importing of images while K3s is running feature is available as of January 2025 releases: v1.32.0+rke2r1, v1.31.5+rke2r1, v1.30.9+rke2r1, v1.30.13+rke2r1
Before that, RKE2 pre-imported the images only when booting.
:::

Pre-importing images onto the node is essential if you configure Kubernetes' `imagePullPolicy` as `Never`. You might do this for security reasons or to reduce the time it takes for your RKE2 nodes to spin up.

RKE2 includes two mechanisms to pre-import images into the containerd image store:

<Tabs groupId="import-images" queryString>
<TabItem value="Online image importing" default>

Users can trigger a pull of images into the containerd image store by placing a text file containing the image names, one per line, in the `/var/lib/rancher/k3s/agent/images` directory. The text file can be placed before RKE2 is started, or created/modified while RKE2 is running. RKE2 will sequentially pull the images via the CRI API, optionally using the [registries.yaml](install/private_registry.md) configuration.

For example:

```bash
mkdir /var/lib/rancher/rke2/agent/images
cp example.txt /var/lib/rancher/rke2/agent/images
```

Where `example.txt` contains:

```
docker.io/library/redis:latest
docker.io/library/mysql:latest
```

After a few seconds, the `redis` and the `mysql` images will be available in the containerd image store of the node. 

Use `sudo rke2 ctr images list` to query the containerd image store.

</TabItem>
<TabItem value="Offline image importing">

Users can import images directly into the containerd image store by placing image tarballs in the `/var/lib/rancher/rke2/agent/images` directory. The tarball can be placed before RKE2 is started, or created/modified while RKE2 is running. RKE2 will decompress the image tarball if necessary, extract the images, and load them into the containerd image store.

For example:

```bash
mkdir /var/lib/rancher/rke2/agent/images
curl https://github.com/rancher/rke2/releases/download/v1.33.1%2Brke2r1/rke2-images.linux-amd64.tar.zst -O  /var/lib/rancher/rke2/agent/images/rke2-images-amd64.tar.zst
```

After a few seconds, the images included in the image tarball will be available in the containerd image store of the node. 

Use `sudo rke2 ctr images list` to query the containerd image store.

This is the method used in Airgap. Please follow the [Airgap install documentation](install/airgap.md) for detailed information.

</TabItem>
</Tabs>

## Set up an image registry

RKE2 supports two alternatives for image registries:

* [Private Registry Configuration](install/private_registry.md) covers use of `registries.yaml` to configure container image registry authentication and mirroring.

* [Embedded Registry Mirror](install/registry_mirror.md) shows how to enable the embedded distributed image registry mirror, for peer-to-peer sharing of images between nodes.
